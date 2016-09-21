var path = {
    build: { //��� �� ������ ���� ���������� ������� ����� ������ �����
        dir: 'build/',
        html: 'build/templates/',
        css: 'build/css/',
        js: 'build/js/',
        bower: 'build/bower_components/',
        fonts: 'build/fonts/',
        tpljs: 'build/js/template/',
        images: 'build/images/'
    },
    bitrix: {//���� ��� ������������ � �������
        dir: './lk/',
        html: './lk/templates/',
        css: './lk/css/',
        js: './lk/js/',
        bower: './lk/bower_components/',
        fonts: './lk/fonts/',
        tpljs: './lk/js/template/',
        images: './lk/images/'
    },
    src: { //���� ������ ����� ���������
        dir: './front/src/',
        html: './front/src/**/*.html', //��������� src/*.html ������� gulp ��� �� ����� ����� ��� ����� � ����������� .html
        css: './front/src/**/*.css', //��������� src/*.html ������� gulp ��� �� ����� ����� ��� ����� � ����������� .html
        js: './front/src/js/main.js',//� ������ � �������� ��� ����������� ������ main �����
        fonts: './front/src/fonts/**/*.*',
        bower: 'bower_components/**/*.*',
        tpljs: './front/src/js/template/**/*.*',
        libcss: './front/src/lib/**/*.css',
        libjs: './front/src/lib/**/*.js',
        images: './front/images/**/*.*'
    },
    watch: { //��� �� ������, �� ���������� ����� ������ �� ����� ���������
        html: './front/src/**/*.html',
        js: './front/src/js/**/*.js',
        css: './front/src/**/*.css',
        bower: './front/src/**/*.*',
        tpljs: './front/src/js/template/**/*.js'
    },
    clean: './build'
};

module.exports = path;