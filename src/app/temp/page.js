"use client"
import CommonComponet from "@/components/CommonComponet";
import { useState } from "react";
import '../../style/commoncompnet.css'

export default function Page() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [skills, setSkills] = useState([]); // array for checkboxes

    const handleSkillsChange = (e) => {
        const { value, checked } = e.target;
        setSkills((prev) =>
            checked ? [...prev, value] : prev.filter((v) => v !== value)
        );
    };

    return (
        <container>
            <div className="max-w-md mx-auto mt-8">
                <CommonComponet
                    type="text"
                    label="Name"
                    placeholder="Enter your name"
                    value={name}
                    className="input-text"
                    onChange={(e) => setName(e.target.value)}
                />

                <CommonComponet
                    type="radio"
                    label="Gender"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    options={[
                        { label: "Male", value: "male" },
                        { label: "Female", value: "female" },
                    ]}
                />
                <CommonComponet
                    type="checkbox"
                    label="Select your skills"
                    name="skills"
                    value={skills} // array of selected values
                    onChange={handleSkillsChange}
                    options={[
                        { label: "React", value: "react" },
                        { label: "Node.js", value: "node" },
                        { label: "Next.js", value: "next" },
                        { label: "MongoDB", value: "mongo" },
                    ]}
                />
                <div className="mt-4">
                    <strong>Selected Skills:</strong> {skills.join(", ")}
                </div>
                <CommonComponet
                    type="select"
                    label="Country"
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    options={[
                        { label: "India", value: "IN" },
                        { label: "USA", value: "US" },
                    ]}
                />

                <CommonComponet
                    type="button"
                    label="Submit"
                    onClick={() =>
                        alert(`Name: ${name}, Gender: ${gender}, Country: ${country}`)
                    }
                />
            </div>
        </container>
    );
}
