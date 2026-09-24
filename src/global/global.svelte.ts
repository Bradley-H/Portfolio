 interface LinkType {
        id: number;
        href: string;
        text: string;
    }

export const LINKS: LinkType[] = [
        { id: 1, href: "#about", text: "about" },
        { id: 2, href: "#projects", text: "projects" },
        { id: 3, href: "#experience", text: "experience" },
        { id: 4, href: "#contact", text: "contact" },
    ];