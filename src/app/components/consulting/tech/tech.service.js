class TechService {
    constructor() {
        this.technologies = [
            {
                'id': 'html',
                'name': 'HTML5',
                'img': 'html5.svg'
            },
            {
                'id': 'css',
                'name': 'CSS3',
                'img': 'css3.svg'
            },
            {
                'id': 'js',
                'name': 'Javascript',
                'img': 'js.svg'
            },
            {
                'id': 'react',
                'name': 'ReactJS',
                'img': 'react.svg'
            },
            {
                'id': 'angular',
                'name': 'AngularJS',
                'img': 'angular.png'
            },
            {
                'id': 'node',
                'name': 'NodeJS',
                'img': 'node.png'
            },
            {
                'id': 'ruby',
                'name': 'Ruby',
                'img': 'ruby.svg'
            },
            {
                'id': 'rails',
                'name': 'Ruby on Rails',
                'img': 'rails.svg'
            },
            {
                'id': 'php',
                'name': 'PHP',
                'img': 'php.png'
            },
            {
                'id': 'wordpress',
                'name': 'Wordpress',
                'img': 'wordpress.svg'
            }
        ];
  }
  
  getTech() {
    return Promise.resolve(this.technologies);
  }
}

export default TechService;
