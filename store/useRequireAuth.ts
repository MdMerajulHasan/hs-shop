import { router } from "expo-router";
import { useAppSelector } from "@/store/hooks";

export default function useRequireAuth() {
    const currentUser = useAppSelector((state) => state.auth.currentUser);

    return () => {
        if (!currentUser) {
            router.push("/login");
            return false;
        }

        return true;
    };
}
