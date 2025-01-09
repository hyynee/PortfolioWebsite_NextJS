import { usePathname } from "@/node_modules/next/navigation";
import { useMemo } from "react";



const useRoutes = () => {
    const pathname = usePathname()
    const routes = useMemo(() => {
        return [
            {
                path: '/',
                title: 'Home',
                active: pathname === '/'
            },
            {
                path: '/services',
                title: 'Services',
                active: pathname === '/Services'
            },
            {
                path: '/resume',
                title: 'Resume',
                active: pathname === '/resume'
            },
            {
                path: '/contact',
                title: 'Contact',
                active: pathname === '/contact'
            },
            {
                path: '/work',
                title: 'Work',
                active: pathname === '/work'
            },
        ]
    }, [])
}

export default useRoutes;