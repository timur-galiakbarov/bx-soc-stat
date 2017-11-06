import bus from './../core/busModule.js';
import topics from './../topics.js';
import events from './../events.js';
import dataContext from './accountDataContext.js';
import {server} from 'core';

var serverApi = server;

bus.subscribe(topics.ACCOUNT.IS_AUTH, dataContext.isAuth);//���������� ������ ����������� ������������
bus.subscribe(topics.ACCOUNT.GET_USER_INFO, dataContext.getUserInfo);//��������� ������ � ������������
bus.subscribe(topics.ACCOUNT.GET_FREE_GROUPS, dataContext.getFreeGroups);//��������� ������ ���������� ��� ������� �����
bus.subscribe(topics.ACCOUNT.ADD_FREE_GROUP, dataContext.addGroupToFreeList);//�������� ������ � ������ ����������
bus.subscribe(topics.ACCOUNT.LOGOUT, logout);//��������� ������ � ������������
bus.subscribe(topics.ACCOUNT.SAVE_STAT_LIST, (data)=> {//��������� ������ ����� ��� ���������� �� �������
    return dataContext.saveStatList(data)
        .then((res)=>{
            bus.publish(events.ACCOUNT.STAT_LIST_UPDATED, {
                id: res.id,
                list: data.list
            });
        });
});

bus.subscribe(topics.NEWS.GET_LIST, dataContext.getNewsList);//��������� ������ ��������

bus.subscribe(topics.BOOKMARK.ADD, dataContext.addBookmark);//���������� ������ � ��������
bus.subscribe(topics.BOOKMARK.GET_LIST, dataContext.getBookmarkList);//��������� ������ ��������
bus.subscribe(topics.BOOKMARK.REMOVE, dataContext.removeBookmark);//��������� ������ ��������

bus.subscribe(topics.FAVORITE.ADD, dataContext.addFavorite);
bus.subscribe(topics.FAVORITE.GET_LIST, dataContext.getFavoriteList);
bus.subscribe(topics.FAVORITE.REMOVE, dataContext.removeFavorite);

bus.subscribe(topics.ADMIN.GET_STAT, dataContext.getAdminStat);

function logout() {
    serverApi.request({
        url: '/controllers/account/logout.php',
        type: 'GET'
    }).then((res)=> {
        return res;
    }, (err)=> {
        return err;
    });
}