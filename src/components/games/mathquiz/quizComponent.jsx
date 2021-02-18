import React from 'react';
import DrawerDesign from '../../design/drawerDesign';
import { Box, Button, Divider, Grid, Paper, Typography, FormControlLabel, Checkbox } from '@material-ui/core';
import { useParams, useHistory } from 'react-router-dom';
import GameCardDesign from '../../design/cardDesign';
import { fetchGames } from '../../sanityConfig/config';

function QuizComponent() {
	const params = useParams();
	const history = useHistory();
	const [games, setGames] = React.useState(null);
	const [questions, setQuestions] = React.useState(null);
	const [choices, setChoices] = React.useState(null);
	const [answers, setAnswers] = React.useState(null);

	React.useEffect(() => {
		fetchGames(setGames);
	}, []);

	React.useEffect(() => {
		games && setQuestions(games[0].question_and_answers[params.id].question);
		questions && setChoices(questions.choices);
	}, [games, params.id, questions, choices]);

	const handleSelected = (e) => {
		const {name, value} = e.target
		setAnswers(prevState => ({
			...prevState,
			[name]: value
		}))
	}
    console.log(choices)

	const renderQuestions = () => {};
	return (
		<DrawerDesign>
			<Typography variant="button">Question: {parseInt(params.id) + 1}</Typography>
			<Divider />
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Box marginTop={5}>
						<Typography variant="h6">{choices && questions.question}</Typography>
					</Box>
				</Grid>
				{choices && choices.map((choice, index) => (
					<Grid item xs={6} key={choice._key}>
						<Paper elevation={choice.is_selected ? 3 : 0}  style={{ padding: 10 }}>
						<FormControlLabel
							control={<Checkbox checked={choice.is_selected} name={`choice_${index}`} value={choice.choice} onChange={(e) => handleSelected(e)}/>}
							label={choice.choice}
						/>							
						</Paper>
					</Grid>
				))}
			</Grid>
			<Box marginTop={7}>
				<Button onClick={() => history.push('/games/mathquiz/1')} variant="contained" color='primary'>Submit</Button>
			</Box>
		</DrawerDesign>
	);
}

export default QuizComponent;
