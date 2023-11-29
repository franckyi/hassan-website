// import * as React from "react";
// import LocalPizzaOutlinedIcon from "@mui/icons-material/LocalPizzaOutlined";
// import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";

// const currency = "zł";
// const standardPizzaSize = "24 cm";
// const largePizzaSize = "32 cm";

// async function getData() {
//   const res = await fetch("http://localhost:1337/api/pizzas?populate=*");

//   if (!res.ok) {
//     throw new Error("Failed to fetch pizzas... Please try again later.");
//   }

//   return res.json();
// }

// const dataList = await getData();

// export default function Menu() {
//   return (
//     <div className="p-4 w-3/4 bg-stone-900/90">
//       <p className="mb-4 text-md text-right">
//         <span>{standardPizzaSize} </span>
//         <span className="text-stone-500"> / </span>
//         <span className="text-orange-500">{largePizzaSize}</span>
//       </p>
//       <ul>
//         {dataList.data.map((item) => (
//           <li className="flex justify-between gap-4 mb-4" key={item.id}>
//             <LocalPizzaOutlinedIcon />
//             <div className="grow">
//               <div className="flex">
//                 <h4 className="text-xl font-bold uppercase">
//                   {item.attributes.name}
//                 </h4>
//                 {item.attributes.spicy > 0 && (
//                   <span className="text-orange-500">
//                     &nbsp;
//                     {Array.from(
//                       { length: item.attributes.spicy },
//                       (_, index) => (
//                         <LocalFireDepartmentRoundedIcon key={index} />
//                       )
//                     )}
//                   </span>
//                 )}
//                 {item.attributes.customLabelAfterName && (
//                   <span className="text-orange-500 italic">
//                     &nbsp;⌀ {item.attributes.customLabelAfterName}
//                   </span>
//                 )}
//                 <div className="grow border-b-2 border-dotted border-stone-500"></div>
//                 <span className="text-xl font-bold">
//                   {item.attributes.price}{" "}
//                   <span className="text-xs">{currency}</span>
//                 </span>
//                 <span className="text-xl text-stone-500">&nbsp;/</span> &nbsp;
//                 <span className="text-orange-500 text-xl font-bold">
//                   {item.attributes.price + item.attributes.priceDiff}&nbsp;
//                   <span className="text-xs">{currency}</span>
//                 </span>
//               </div>

//               <span className="text-sm text-stone-400">
//                 {item.attributes.ingredients}
//               </span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
