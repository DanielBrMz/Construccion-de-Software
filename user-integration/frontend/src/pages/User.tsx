import CrudSection from "../components/custom/CrudSection";
import DatabaseSection from "../components/custom/DatabaseSection";
import DescriptionsSection from "../components/custom/DescriptionsSection";
import PrescriptionsSection from "../components/custom/PrescriptionSection";
import SafeArea from "../components/custom/SafeArea";
import UserBanner from "../components/custom/UserBanner";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../components/ui/resizable";
import { useForm } from "../hooks/useForm";
import React from "react";
import { useParams } from "react-router-dom";

interface UserPageProps {
  children?: React.ReactNode;
}

const UserPage: React.FC<UserPageProps> = () => {
  const params = useParams();
  const userid = params.userid!;

  const form = useForm({
    description: "",
    prescription: "",
  });

  return (
    <div className="bg-gray-50 grid grid-cols-8 h-screen max-h-[93vh]">
      <UserBanner userid={userid} />
      <SafeArea>
        <ResizablePanelGroup direction="horizontal" className="h-full">
          <ResizablePanel defaultSize={40} className="h-full">
            <SafeArea>
              <div className="p-2">
                <DescriptionsSection userid={userid} />
              </div>
              <div>
                <DatabaseSection form={form} />
              </div>
            </SafeArea>
          </ResizablePanel>
          <ResizablePanel defaultSize={40} className="h-full">
            <SafeArea>
              <div className="p-2">
                <PrescriptionsSection userid={userid} />
              </div>
            </SafeArea>
          </ResizablePanel>
          <ResizableHandle className="w-0.5 active:w-1 hover:w-1 transition-all transform hover:bg-black/40 active:bg-black/40 bg-black/15 rounded-full" />
          <ResizablePanel defaultSize={60} className="h-full">
            <SafeArea>
              <div className="p-8">
                <CrudSection userid={userid} form={form} />
              </div>
            </SafeArea>
          </ResizablePanel>
        </ResizablePanelGroup>
      </SafeArea>
    </div>
  );
};

export default UserPage;
