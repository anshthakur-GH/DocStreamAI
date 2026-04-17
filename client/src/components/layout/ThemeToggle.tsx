import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-10 w-10 rounded-lg border-white/60 bg-white/50 backdrop-blur-xl shadow-sm hover:bg-white/80 transition-all">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border-white/40 dark:border-slate-800">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className={`flex items-center space-x-2 cursor-pointer ${theme === 'light' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' : ''}`}
        >
          <Sun className="h-4 w-4 mr-2 text-amber-500" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className={`flex items-center space-x-2 cursor-pointer ${theme === 'dark' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' : ''}`}
        >
          <Moon className="h-4 w-4 mr-2 text-blue-400" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className={`flex items-center space-x-2 cursor-pointer ${theme === 'system' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' : ''}`}
        >
          <Laptop className="h-4 w-4 mr-2 text-slate-500" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
