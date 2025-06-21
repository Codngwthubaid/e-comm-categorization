import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "@/lib/axiosInstance";
import { Loader } from "lucide-react";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await axiosInstance.post("/auth/register", { name, email, password });
            navigate("/login");
            setLoading(false);
        } catch (err) {
            alert("Register failed");
        }
    };

    return (
        <div className="min-h-[calc(100vh-150px)] flex items-center justify-center bg-white">
            <div className="w-full max-w-md rounded-lg border p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-center">Create your account</h2>

                <div className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium text-sm">Name</label>
                        <Input placeholder="Enter" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-sm">Email</label>
                        <Input placeholder="Enter" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-sm">Password</label>
                        <div className="relative">
                            <Input
                                placeholder="Enter"
                                type={showPassword ? "text" : "password"}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    <Button
                        className="w-full bg-black text-white hover:bg-black/80 flex items-center justify-center"
                        onClick={handleRegister}
                        disabled={loading}
                    >
                        {loading ? (
                            <Loader className="animate-spin mr-2" size={16} />
                        ) : null}
                        {loading ? "Creating ..." : "  CREATE NEW ACCOUNT"}
                    </Button>

                    <div className="border-t my-4"></div>

                    <p className="text-center text-sm text-gray-600">
                        Don’t have an Account? <a href="/login" className="font-medium text-black">LOGIN</a>
                    </p>
                </div>
            </div>
        </div>
    );
};
