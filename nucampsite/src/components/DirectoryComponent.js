import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({campsite,onClick}) {
    return(
        <Card onClick={() => onClick(campsite.id)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
function Directory(props) {

    // renderSelectedCampsite(campsite) {
    //     if (campsite) {
    //         return (
    //             <Card>
    //                 <CardImg top src={campsite.image} alt={campsite.name} />
    //                 <CardBody>
    //                     <CardText>{campsite.name}</CardText>
    //                     <CardText>{campsite.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     }
    //     return <div />;
    // }

        const directory = props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <RenderDirectoryItem campsite={campsite} onClick={props.onClick} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                {/* <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedCampsite(this.state.selectedCampsite)}
                    </div>
                </div> */}
            </div>
        );
    }

export default Directory;