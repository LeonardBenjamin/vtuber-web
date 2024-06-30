fs.writeFile('talents.html', `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML</title>
</head>
<body>
    
</body>
</html>`, (err) => {
    if (err) throw err;
    console.log('File created successfully!');
});
