import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Projects } from "./projects";

export const ProjectTabs = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col pl-[5rem] pr-[5rem] max-[640px]:p-[2rem]">
      <Tabs key="underlined" variant="underlined" aria-label="Dynamic tabs">
        <Tab key="login boilerplate" title="Web" className="text-2xl text-[#303446] dark:text-white">
          <Card className="bg-gray-900">
            <CardBody>
              <Projects.Front />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="api" title="Api" className="text-2xl text-[#303446] dark:text-white">
          <Card className="bg-gray-900">
            <CardBody>
              <Projects.Back />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="meu banco facil" title="Mobile" className="text-2xl text-[#303446] dark:text-white">
          <Card className="bg-gray-900">
            <CardBody>
              <Projects.Mobile />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
