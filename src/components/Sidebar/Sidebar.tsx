import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

interface Props {
  side: 'left' | 'right' | 'top' | 'bottom' | null | undefined;
  element?: React.ReactNode;
}

const Sidebar = ({ side, element }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{element}</SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
