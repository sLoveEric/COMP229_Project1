/*
 * File: index.server.controller.js
 * Name: Sheng Wang
 * ID: 300765817
 * Date: Jun 7, 2023
 */

exports.render = function (req, res) {
    res.render('index', {
        title: 'Wonder_World'
    })
};