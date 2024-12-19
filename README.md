# stats_curriculum_map

## Description

### Overview:

This resource is a single-file interactive web application for students to test their knowledge of key concepts found in [Openstax Introductory Statistics Textbook](https://openstax.org/details/books/introductory-statistics/).

The main file "index.html" uses client-side browser capability to display a webapp that consists of:

1. a slippy map to navigate between statistics concepts presented as nodes in a graph

2. an interactive *concept details* section that displays concept information on hover and

3. a modal overlay that displays when concepts are clicked; this modal provides a randomly selected question to test the user's knowledge of the concept.

In addition to the main file a javascript file, "concepts.js" (or "concepts_small.js" for this current prototype), contains the data that is presented by the application. The javascript from this file can be integrated into index.html keep a single file that may be more transportable for some users.

This application is extensible. To add additional concepts to the web application add another object to the list named "concepts" in the "concepts.js" file.

The object format is as follows:

> {

>   id:[integer UID],

>   name:[name of concept],

>   lat:[float], lon:[float],

>   definition:[definition of concept], 

>   related:[an array of related concepts listed by id],

>   questions:[ //an object with key value pairs for question, a list of options, the correct option example:

>   {question:'answer option 1',options:['option1','option2','option3'],correct:'option1'}

>   ]

> }

### Subject:

Statistics and Probability 

### Level:

High School, Community College / Lower Division, College / Upper Division 

### Material Type:

Activity/Lab, Interactive, Self-Assessment Tool

### Author:

Pete Vermeer 

## License:

Creative Commons Attribution Creative Commons Attribution
    
© Jun 23, 2022 OpenStax. Textbook content produced by OpenStax is licensed under a Creative Commons Attribution License.

Content for this webapp is from [Introductory Statistics](https://openstax.org/details/books/introductory-statistics/)

### Language:
    
English 

### Media Format:

Interactive 





