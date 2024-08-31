
import React from "react";
import "./index.css"

export default function  GlobalFooter(){
    const CurrentYear = new Date().getFullYear();
    return(
       <div
       className="global-footer">
        <div>@ {CurrentYear}学习伙伴刷题网站</div>
           <div>
               <a href="">
                   作者：程序员-siren
               </a>
           </div>
       </div>
    );
}