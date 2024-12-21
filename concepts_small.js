const concepts = [
{
    id:9, name:'Data', lat:0.3, lon:0.4, definition:'a set of observations (a set of possible outcomes); most data can be put into two groups: qualitative (an attribute whose value is indicated by a label) or quantitative (an attribute whose value is indicated by a number). Quantitative data can be separated into two subgroups: discrete and continuous. Data is discrete if it is the result of counting (such as the number of students of a given ethnic group in a class or the number of books on a shelf). Data is continuous if it is the result of measuring (such as distance traveled or weight of luggage)', 
    related:[38], 
    questions:[
        {question:'answer option 1',
         options:[
            'option1',
            'option2',
             'option3'],
         correct:'option1'}]
},
{
    id:20, name:'Parameter', lat:0.1, lon:0.6, definition:'a number that is used to represent a population characteristic and that generally cannot be determined easily', 
    related:[38,22], 
    questions:[
        {question:'Use the following information to answer the next three exercises: A Lake Tahoe Community College instructor is interested in the mean number of days Lake Tahoe Community College math students are absent from class during a quarter. What is the population she is interested in?',
         options:[
            'all Lake Tahoe Community College students',
             'all Lake Tahoe Community College English students',
             'all Lake Tahoe Community College students in her classes',
             'all Lake Tahoe Community College math students'
         ],
         correct:'all Lake Tahoe Community College math students'}]
},
{id:22, name:'Population', lat:0.2, lon:0.7, definition:'all individuals, objects, or measurements whose properties are being studied', related:[20,32], questions:[{question:'answer option 1',options:['option1','option2','option3'],correct:'option1'}]},
{id:25, name:'Qualitative Data', lat:0.3, lon:0.1, definition:'an attribute whose value is indicated by a label', related:[9,42], questions:[{question:'answer option 1',options:['option1','option2','option3'],correct:'option1'}]},
{id:26, name:'Quantitative Data', lat:0.5, lon:0.3, definition:'an attribute whose value is indicated by a number', related:[9,42], questions:[{question:'answer option 1',options:['option1','option2','option3'],correct:'option1'}]},
{id:32, name:'Sample', lat:0.3, lon:0.6, definition:'a subset of the population studied', related:[22,9], questions:[{question:'answer option 1',options:['option1','option2','option3'],correct:'option1'}]},
{id:37, name:'Simple Random Sampling', lat:0.4, lon:0.7, definition:'a straightforward method for selecting a random sample; give each member of the population a number. Use a random number generator to select a set of labels. These randomly selected labels identify the members of your sample.', related:[32], questions:[{question:'answer option 1',options:['option1','option2','option3'],correct:'option1'}]},
{id:38, name:'Statistic', lat:0.1, lon:0.4, definition:'a numerical characteristic of the sample; a statistic estimates the corresponding population parameter.', related:[32,9], questions:[{question:'answer option 1',options:['option1','option2','option3'],correct:'option1'}]},
{id:42, name:'Variable', lat:0.4, lon:0.2, definition:'a characteristic of interest for each person or object in a population', related:[9], questions:[{question:'answer option 1',options:['option1','option2','option3'],correct:'option1'}]}    
];
