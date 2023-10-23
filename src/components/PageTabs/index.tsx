import React, { ReactNode } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { Content, TabsContainer, TabsList, Trigger } from './styles'

type Tabs = {
  name: string
  component: ReactNode
}

interface PageTabsProps {
  tabs: Tabs[]
}

export const PageTabs = ({ tabs }: PageTabsProps) => (
  <TabsContainer className="TabsRoot" defaultValue={tabs[0].name}>
    <TabsList className="TabsList" aria-label="Manage your account">
      {tabs.map((tab) => (
        <Trigger key={tab.name} className="TabsTrigger" value={tab.name}>
          {tab.name}
        </Trigger>
      ))}
    </TabsList>
    {tabs.map((tab) => (
      <Content key={tab.name} className="TabsContent" value={tab.name}>
        {tab.component}
      </Content>
    ))}
  </TabsContainer>
)
