import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>Sobre</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Serviços</SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>Projetos</SidebarLink>
          <SidebarLink to="depoiments" onClick={toggle}>Depoimentos</SidebarLink>
          <SidebarLink to="quotation" onClick={toggle}>Orçamentos</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contatos</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
