import './StatusPanel.css';

interface PanelModel {
    data: {
            guid: string
            questionText: string;
            questionImage: string;
            questionTypes: { singleChoice: boolean, multiChoice: boolean };
            answers: { id: string, answerText: string, answerImage: string, isAnswer: boolean, isChecked: boolean } [];
            weight: number;
            difficulty: number;
            isSubmitted: boolean;
            hasCorrectAnswer: boolean;
       
    }[], current: number, handleNavigationClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>, index: number) => void 
}


const getStyle  = (isCurrent: boolean, isSubmitted: boolean, isCorrect: boolean):string  =>
    {

    var style = [""];
    if (isSubmitted && isCorrect) { style.push("correct") }
    if (isSubmitted && !isCorrect) { style.push("wrong") }
    if (!isSubmitted) { style.push("neutral") }
    if (isCurrent) { style.push("current") } 
    return style.join(" ");
   } 

export const StatusPanel = (props: PanelModel ) => {

    
    return (
        <div> 
            {
                props.data.map((question, index) => (
                    <input type="button"
                        className={getStyle((props.current === index), question.isSubmitted, question.hasCorrectAnswer)}
                        value={index + 1} key={index} onClick={(event) => props.handleNavigationClick(event, index)} />

                ))
                }
        </div>
    )
}


export default StatusPanel;

