import TodoInput from "@/components/TodoInput"
import Head from "next/head"
import { useState } from "react"

export default function Home() {
    const [isEditMode, setIsEditMode] = useState(true)

    return (
        <>
            <Head>
                <title>Todo App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <h1>ToDo App</h1>

                <button onClick={() => setIsEditMode(!isEditMode)}>
                    Toggle Edit Mode
                </button>

                <div>
                    <TodoInput />
                    <div>
                        <ul>
                            <li>Task 1</li>
                            <li>Task 2</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
