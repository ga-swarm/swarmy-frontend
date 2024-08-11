import { AppShell, Burger, em, Flex, NavLink, Space, Title } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { IconChartBar, IconCode, IconFileInvoice, IconFileStack, IconKey } from '@tabler/icons-react';
import UserMenu from './UserMenu.tsx';

export default function LoggedInLayout({ children, sidebar }) {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

  return (
    <>
      <AppShell
        layout="alt"
        header={{ height: 60 }}
        navbar={{
          width: sidebar ? 300 : 0,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header style={{ boxShadow: '#00000066 0px 5px 10px -4px' }} withBorder={false}>
          <Flex mt={6} justify="space-between" align="center" px={'md'}>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            {isMobile ? <Title size={26}>Swarmy</Title> : <div></div>}

            {/*<Flex justify="flex-end" align="center" gap={12}>*/}
            {/*<ThemeSwitcher />*/}
            <UserMenu />
            {/*</Flex>*/}
          </Flex>
        </AppShell.Header>

        {sidebar && (
          <AppShell.Navbar>
            <Flex justify={'center'} align={'center'} gap={6}>
              <Title mt={14} size={26}>
                Swarmy
              </Title>
            </Flex>

            <Space h="xl" />
            {/*<NavLink*/}
            {/*    component={RouterNavLink}*/}
            {/*    to={"/app/profile"}*/}
            {/*    label="Profile"*/}
            {/*    leftSection={<IconUser size="1.5rem" stroke={1.5}/>}*/}
            {/*/>*/}
            <NavLink
              component={RouterNavLink}
              onClick={toggle}
              to={'/app/files'}
              label="Files"
              leftSection={<IconFileStack size="1.5rem" stroke={1.5} />}
            />
            <NavLink
              component={RouterNavLink}
              onClick={toggle}
              to={'/app/analytics'}
              label="Analytics"
              leftSection={<IconChartBar size="1.5rem" stroke={1.5} />}
            />
            <NavLink
              component={RouterNavLink}
              onClick={toggle}
              to={'/app/api-keys'}
              label="Api keys"
              leftSection={<IconKey size="1.5rem" stroke={1.5} />}
            />
            <NavLink
              component={RouterNavLink}
              onClick={toggle}
              to={'/app/api-guide'}
              label="Api guide"
              leftSection={<IconCode size="1.5rem" stroke={1.5} />}
            />
            <NavLink
              component={RouterNavLink}
              onClick={toggle}
              to={'/app/billing'}
              label="Billing"
              leftSection={<IconFileInvoice size="1.5rem" stroke={1.5} />}
            />
          </AppShell.Navbar>
        )}

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </>
  );
}
