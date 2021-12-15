import vegy from '../../resources/img/tabs/vegy.jpg';
import elite from '../../resources/img/tabs/elite.jpg';
import post from '../../resources/img/tabs/post.jpg';


const  PreviewSlide = () => {

    const slideItems = [
        <img src={vegy} alt="vegy"/>,
        <img src={elite} alt="elite"/>,
        <img src={post} alt="post"/>,
        <img src={vegy} alt="vegy"/>,

    ];

    const renderPreviewSlide = slideItems.map(elem =>{
        return (
            <div className="tabcontent hide">
                {elem }
            </div>
        );
    });

       
    
    return(
        <div>
                {renderPreviewSlide}
        </div>
            
    );
}

export default PreviewSlide;