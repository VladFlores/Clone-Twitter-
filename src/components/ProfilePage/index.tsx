import React from 'react';

import Feed from '../Feed';

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData,
    Location,
    CakeIcon,
    Followage,
    EditButton

} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>Vladimir Flores</h1>
            <h2>@RealVlad</h2>

            <p>
                Developer at <a href="http://rocketseat.com.br">@Rocketseat </a>
            </p>
            
            <ul>
                <li>
                    <Location />
                    São Paulo, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 21 de junho de 2001
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong> 94</strong>
                </span>
                <span>
                    <strong>500 </strong> seguidores
                </span>
            </Followage>     
        </ProfileData>
        <Feed />
    </Container>
  );
}

export default ProfilePage;