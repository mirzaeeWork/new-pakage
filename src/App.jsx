import Greeting from "./components";
import CustomButton from "mirzaee-ui-kit";
import { useState } from "react";



function App() {
  const [count, setCount] = useState(0);
  // لیستی از رنگ‌های پس‌زمینه که می‌خواهیم به صورت تصادفی انتخاب شوند
  const colors = [
   "bg-blue-900", 
   "bg-red-500", 
   "bg-green-500", 
   "bg-yellow-500", 
   "bg-purple-500",
   "bg-teal-500"
 ];

 // انتخاب رنگ تصادفی از لیست رنگ‌ها
 const getRandomColor = () => {
   const randomIndex = Math.floor(Math.random() * colors.length);
   return colors[randomIndex];
 };

 const [bgColor, setBgColor] = useState(colors[0]); // شروع با رنگ اولیه

  return (
    <>
    <div className="">
      
    </div>
      <Greeting message={"Universe"} />
      <CustomButton className={`px-4 py-2 rounded transition ${bgColor} text-white cursor-pointer`}
        onClick={() => setCount(count + 1)}
        onMouseEnter={()=>setBgColor(getRandomColor())}
         data-testid="custom-button">
         Click {count} me!
        </CustomButton>
        <CustomButton className={`text-2xl`}
        
        >
         Click me!
        </CustomButton>

    </>
  );
}

export default App;
