import React from 'react'

export default function index() {
    const now = new Date()
    return (
        <div suppressHydrationWarning={true}>
            {typeof window !== "undefined" ? "Browser" : "Server"}
            <br />
            {now.getDate()}

        </div>
    )
}
