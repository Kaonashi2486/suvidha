import NumberTickerDemo from "@/components/ui/home_ui/numberticker";
// 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white" style={{ color: 'black' }}>
     <NumberTickerDemo value={90}/>
    </main>
  );
}

