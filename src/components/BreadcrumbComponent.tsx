"use client";
import React from "react";
import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadcrumbComponent = ({ pageName, parentName = "Services", parentHref = "/?page=services" }: any) => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList className="text-slate-400">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-slate-400 hover:text-teal-400 transition-colors">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash className="w-3 h-3 text-teal-500/40" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href={parentHref} className="text-slate-400 hover:text-teal-400 transition-colors">
              {parentName}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash className="w-3 h-3 text-teal-500/40" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-teal-400 font-medium">
              {pageName}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default BreadcrumbComponent;
