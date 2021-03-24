import React from 'react';

import Button from '../Button';

import { 
    Container,
    Topside,
    Logo,
    MenuBotton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    Botside,
    Avatar,
    ProfileData,
    ExitIcon
 } from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container >
        <Topside >
            <Logo />

            <MenuBotton>
                <HomeIcon />
                <span>Página Inicial</span>
            </MenuBotton>

            <MenuBotton>
                <BellIcon />
                <span>Notificações</span>
            </MenuBotton>

            <MenuBotton>
                <EmailIcon />
                <span>Mensagens</span>
            </MenuBotton>

            <MenuBotton>
                <FavoriteIcon />
                <span>Favoritados</span>
            </MenuBotton>

            <MenuBotton className=  "active" >
                <ProfileIcon />
                <span>Perfil</span>
            </MenuBotton>

            <Button>
                <span>Tweetar</span>
            </Button>
        </Topside>
        <Botside>
            <Avatar />

            <ProfileData>
                <strong>Vladimir Flores</strong>
                <span>@RealVlad</span>
            </ProfileData>
            <ExitIcon />
        </Botside>
    </Container>
  );
}

export default MenuBar;