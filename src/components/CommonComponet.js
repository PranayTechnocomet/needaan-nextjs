import React from "react";
import '../style/commoncompnet.css'
const CommonComponet = ({
    type,
    label,
    name,
    placeholder,
    value,
    options = [],
    onChange,
    onClick,
    className,
    ...rest
}) => {
    return (
        <div className="container">
            <div className={`mb-4 ${className || ""}`}>
                {label && type !== "button" && (
                    <label className="block mb-1 common-label-text">{label}</label>
                )}

                {(["text", "number", "email", "password"].includes(type)) && (

                    <input
                        type={type}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        className={`border rounded px-3 py-2  w-full input-type-text ${className}`}
                        {...rest}
                    />

                )}
                {type === "textarea" && (
                    <textarea
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        className="border rounded px-3 py-2 w-full"
                    />
                )}

                {type === "select" && (
                    <select
                        name={name}
                        value={value}
                        onChange={onChange}
                        className="border rounded px-3 py-2 w-full"
                    >
                        <option value="">Select</option>
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                )}

                {type === "radio" && (
                    <div className="flex flex-col gap-2 ">
                        {options.map((opt) => (
                            <label key={opt.value} className="flex items-center input-type-radio gap-2">
                                <input
                                    type="radio"
                                    name={name}
                                    value={opt.value}
                                    checked={value === opt.value}
                                    onChange={onChange}
                                />
                                {opt.label}
                            </label>
                        ))}
                    </div>
                )}
                {type === "checkbox" && (
                    <div className="flex flex-col gap-2">
                        {options.map((opt) => (
                            <label key={opt.value} className="flex items-center gap-2 input-type-checkbox">
                                <input
                                    type="checkbox"
                                    name={name}
                                    value={opt.value}
                                    checked={Array.isArray(value) && value.includes(opt.value)}
                                    onChange={onChange}
                                />
                                {opt.label}
                            </label>
                        ))}
                    </div>
                )}

                {type === "dropdown" && (
                    <select
                        name={name}
                        value={value}
                        onChange={onChange}
                        className="border input-type-dropdown rounded px-3 py-2 w-full "
                    >
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                )}

                {type === "button" && (
                    <button
                        type="button"
                        onClick={onClick}
                        className="bg-blue-600 text-white px-4 py-2 button-submit"
                    >
                        {label || "Submit"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default CommonComponet;
