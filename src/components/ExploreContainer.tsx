import './ExploreContainer.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (

    <IonCard>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>Hello world</IonCardTitle>
        <IonCardSubtitle>My first ionic application</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content.</IonCardContent>
      </IonCard>

    

  );
};

export default ExploreContainer;
