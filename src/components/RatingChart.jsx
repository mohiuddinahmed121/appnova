import apps from "../../public/appData.json";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function RatingChart() {
   const app = apps[0];

   const chartData = [...app.ratings]
      .sort((a, b) => parseInt(b.name) - parseInt(a.name))
      .map((item) => ({
         name: item.name,
         value: item.count,
      }));

   return (
      <div className="w-full h-[300px]">
         <h2>{app.title} Ratings</h2>

         <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical">
               <YAxis dataKey="name" type="category" />
               <XAxis type="number" />

               <Tooltip />

               <Bar dataKey="value" fill="#F97316" />
            </BarChart>
         </ResponsiveContainer>
      </div>
   );
}
