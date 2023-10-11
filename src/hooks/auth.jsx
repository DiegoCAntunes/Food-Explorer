import React, { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api"

// Create a context for authentication
export const AuthContext = createContext({})

// Authentication Provider component
function AuthProvider({ children }) {
    // State to hold user data
    const [data, setData] = useState({})

    // Function to handle user sign in
    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data

            // Store user data in local storage
            localStorage.setItem("@rocketfoods:user", JSON.stringify(user))
            localStorage.setItem("@rocketfoods:token", token)

            // Set the token in API headers
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({ user, token })

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Error during SignIn")
            }
        }
    }

    // Function to handle user sign out
    function signOut() {
        localStorage.removeItem("@rocketfoods:user")
        localStorage.removeItem("@rocketfoods:token")

        setData({})
    }

    // Function to update user profile
    async function updateProfile({ user, avatarFile }) {
        try {

            if (avatarFile) {
                const fileUploadForm = new FormData()
                fileUploadForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileUploadForm)
                user.avatar = response.data.avatar
            }

            await api.put("/users", user)
            localStorage.setItem('@rocketfoods:user', JSON.stringify(user))

            setData({ user, token: data.token })
            alert("Profile updated")

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Error during SignIn")
            }
        }
    }

    // Effect to run on component mount
    useEffect(() => {
        const user = localStorage.getItem("@rocketfoods:user")
        const token = localStorage.getItem("@rocketfoods:token")

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    // Render the provider with the provided value
    return (
        <AuthContext.Provider value={{ 
            signIn, 
            user: data.user,
            signOut,
            updateProfile
        }}>
            {children}
        </AuthContext.Provider>
    )
}

// Hook to use the authentication context
function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }
