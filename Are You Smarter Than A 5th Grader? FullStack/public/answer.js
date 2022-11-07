const questions = [
    {
        prompt: 'How many countries are in Africa?',
        answer: '53'
    },
    {
        prompt: 'How many amendments are in the Bill of Rights?',
        answer: '10'
    },
    {
        prompt: 'Which language is the most widely spoken in South America?',
        answer: 'English'
    },
    {
        prompt: 'Who was assassinated on the 22nd of November 1963?',
        answer: 'JFK'
    },
    {
        prompt: 'Which one of the following states is NOT part of the Four Corners?',
        answer: 'Nevada'
    },
    {
        prompt: 'What’s the closest planet to the sun?',
        answer: 'Mercury'
    },
    {
        prompt: 'Can you name the island which is considered both as an island and a continent?',
        answer: 'Australia '
    },
    {
        prompt: 'Can you count the number of stars present in the official flag of the USA?',
        answer: '50'
    },
    {
        prompt: 'In which country was the first fireworks invented?',
        answer: 'China'
    },
    {
        prompt: 'How many members constitute the US Electoral College?',
        answer: '538'
    }


]

const score = 0;
for(const i=0; i , questions.length; i++){
    const response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert('right');
    } else{
        alert('wrong');
    }
}
alert('you got'+ score + '/ + questions.lenght')