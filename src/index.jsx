import { createRoot } from "react-dom/client"
import AppLayout from "./layouts/App"
import './assets/css/style.css'
import CatatanApp from "./catatan/CatatanApp"

const root = createRoot(document.getElementById("root"))
root.render(
  <AppLayout>
    <CatatanApp></CatatanApp>
  </AppLayout>
)