import { useState } from 'react';

function useSidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return { isSidebarOpen, toggleSidebar };
}

export default useSidebar;
