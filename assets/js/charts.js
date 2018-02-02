new RGraph.Bar({
        id: 'chart-days',
        data: ['8.05','8.58','7,58','8,33','3,01'],
        options: {
            textAccessible: true,
            labels: ['Segunda','Terça','Quarta','Quinta','Sexta'],
            labelsAboveSize: 11,
            labelsAboveUnitsPost: 'h ~',
            labelsScaleDecimals: 2,
            colors: [
                'rgba(92,184,92,0.7)',
                'rgba(92,184,92,0.7)',
                'rgba(201,48,44,0.7)',
                'rgba(92,184,92,0.7)',
                'rgba(201,48,44,0.7)',
            ],
            colorsSequential: true,
            textSize: 12,
            labelsAbove: true,
            variant: 'bar',
            shadow: false,
            backgroundGridVlines: false,
            backgroundGridBorder: false,
            noxaxis: true,
            unitsPost: 'h',
        }
    }).grow();

    new RGraph.Bar({
        id: 'chart-weeks',
        data: ['40.05','41.13','46,58','35,01'],
        options: {
            textAccessible: true,
            labels: ['1ª Semana','2ª Semana','3ª Semana','4ª Semana'],
            labelsAboveSize: 11,
            labelsAboveUnitsPost: 'h ~',
            labelsScaleDecimals: 2,
            colors: [
                'rgba(92,184,92,0.7)',
                'rgba(92,184,92,0.7)',
                'rgba(92,184,92,0.7)',
                'rgba(201,48,44,0.7)',
            ],
            colorsSequential: true,
            textSize: 12,
            labelsAbove: true,
            variant: 'bar',
            shadow: false,
            backgroundGridVlines: false,
            backgroundGridBorder: false,
            noxaxis: true,
            unitsPost: 'h',
        }
    }).grow();

    new RGraph.Bar({
        id: 'chart-months',
        data: ['160','151','162','159','167','161','160','159','144','0','0','0'],
        options: {
            textAccessible: true,
            labels: ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'],
            labelsAboveSize: 11,
            colors: [
                'rgba(92,184,92,0.7)',
                'rgba(201,48,44,0.7)',
                'rgba(92,184,92,0.7)',
                'rgba(201,48,44,0.7)',
                'rgba(92,184,92,0.7)',
                'rgba(92,184,92,0.7)',
                'rgba(92,184,92,0.7)',
                'rgba(201,48,44,0.7)',
                'rgba(201,48,44,0.7)',
                '',
                '',
                ''
            ],
            colorsSequential: true,
            textSize: 12,
            labelsAbove: true,
            variant: 'bar',
            shadow: false,
            backgroundGridVlines: false,
            backgroundGridBorder: false,
            noxaxis: true,
            unitsPost: 'h',
        }
    }).grow();

    new RGraph.Bar({
        id: 'chart-years',
        data: ['1935','1911','1957'],
        options: {
            labels: ['2014','2015','2016'],
            labelsAboveSize: 12,
            labelsAboveUnitsPost: ' horas',
            colors: [
                'rgba(92,184,92,0.7)',
                'rgba(201,48,44,0.7)',
                'rgba(92,184,92,0.7)',
            ],
            colorsSequential: true,
            textSize: 11,
            labelsAbove: true,
            variant: 'bar',
            shadow: false,
            backgroundGridVlines: false,
            backgroundGridBorder: false,
            noxaxis: true,
            unitsPost: 'h',
        }
    }).grow();