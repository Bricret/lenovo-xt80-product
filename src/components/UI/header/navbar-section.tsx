"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarSection() {
  return (
    <div className="">
      <Navbar className="top-0 gap-6 " />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Tienda">
          <div className="text-sm grid grid-cols-2 gap-10 p-4 ">
            <ProductItem
              title=" TWS Pro 6 Inalámbrico"
              href="https://www.falabella.com.co/falabella-co/product/123138306/Audifonos-Inalambricos-TWS-Pro-6-Inalambrico-Bluetooth-50-Rosado./123138308"
              src={"/products/item1.webp"}
              description="Auriculares acústicos con el diámetro justo y el diseño ergonómico."
            />
            <ProductItem
              title="Lenovo Thinkplus Th30"
              href="https://www.falabella.com.co/falabella-co/product/124043737/Audifonos-Inalambricos-Bluetooth-5.3-Lenovo-Thinkplus-Th30/124043738"
              src={"/products/item2.webp"}
              description="Experimenta la adrenalina de sumergirte en la escena de otra manera."
            />
            <ProductItem
              title="Lenovo Lp75 Deportivos"
              href="https://www.falabella.com.co/falabella-co/product/117665758/Audifonos-Manos-Libres-Bluettooth-Lenovo-Lp75-Deportivos/117665759"
              src={"/products/item3.webp"}
              description="La tecnología BT 5.3 brinda un rendimiento estable y un bajo consumo de energía."
            />
            <ProductItem
              title="wi-c100 - negro"
              href="https://www.falabella.com.co/falabella-co/product/119321677/Audifonos-internos-inalambricos-wi-c100-negro/119321680"
              src={"/products/item4.webp"}
              description="Los audífonos WI-C100 son cómodos y fáciles de usar."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Soporte">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">Comunicarse con un trabajador</HoveredLink>
            <HoveredLink href="#">Errores del sitio web</HoveredLink>
            <HoveredLink href="#">Saber mas</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
