import { Divider, Grid, Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Box } from '@material-ui/core'
import React from 'react'
import {useHistory} from 'react-router-dom';
import DrawerDesign from '../../../design/drawerDesign'
import {useParams} from 'react-router-dom';
import {fetchQuiz} from '../../../sanityConfig/config';

function Quiz() {
    const params = useParams();
    const history = useHistory();
    const [quiz, setQuiz] = React.useState(null);
    const [question, setQuestion] = React.useState(null);
    const [answer, setAnswer] = React.useState(null);
    const [score, setScore] = React.useState(0);

    React.useEffect(() => {
        fetchQuiz(setQuiz)
        quiz && quiz.map(item => {
            if(item.question_number === params.id) {
                setQuestion({no: item.question_number, q: item.question, a: item.answer, q_a: item.choice_a,  q_b: item.choice_b,  q_c: item.choice_c,  q_d: item.choice_d})
            }
        })
    }, [quiz]);

    const handleChange = (e) => {
        setAnswer(e.target.value)
    }

    // const handleBack = () => {
    //     if(parseInt(params.id) > 1) {
    //         history.push(`/games/mathquiz/${parseInt(params.id)-1}`)
    //     }
    // }

    const submit = () => {
        if(answer === null) {
            alert('Please choose your answer...')
        }else {
            if(question.a === answer) {
                setScore(score + 1)
            }
            history.push(`/games/mathquiz/${parseInt(params.id)+1}`)
            setAnswer(null)
        }

       
    }
    return (
       <DrawerDesign>
           {question !== null ? 
           <Grid container spacing={3}>
               <Grid item xs={9}>
                    <Typography variant="h4">{parseInt(params.id) > 10 ? "Quiz End" : `Question ${params.id}`}</Typography>                    
               </Grid>
               {/* <Grid item xs={3}>
                    {parseInt(params.id) > 1 && <Box display="flex" justifyContent="flex-end">
                        <Button variant="outlined" onClick={handleBack}>Back to Question {params.id > 1 ? parseInt(params.id) - 1 : null}</Button>
                    </Box> }                   
               </Grid> */}
               <Grid item xs={12}>                
                    <Divider />
               </Grid>
              {parseInt(params.id) > 10 ? <Grid item xs={12}>
                  <Typography variant="h3" align='center'>Your Score is {score}</Typography>
              </Grid> : 
                <>
                    <Grid item xs={12}>                
                        <Typography variant="h6">{ question.q} ?</Typography>
                    </Grid>
                    <Grid  item xs={12}>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="gender" name="choices" value={answer} onChange={handleChange}>
                            <FormControlLabel value={question.q_a} control={<Radio />} label={`A. ${question.q_a}`} />
                            <FormControlLabel value={question.q_b} control={<Radio />} label={`B. ${question.q_b}`} />
                            <FormControlLabel value={question.q_c} control={<Radio />} label={`C. ${question.q_c}`} />
                            <FormControlLabel value={question.q_d} control={<Radio />} label={`D. ${question.q_d}`} />
                        </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button size="small" variant="contained" color="primary" onClick={submit}>Submit</Button>
                    </Grid>
                </>
                }
           </Grid> : <div>Loading...</div>}           
       </DrawerDesign>
    )
}

export default Quiz
