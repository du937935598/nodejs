/*
Navicat MySQL Data Transfer

Source Server         : 博客后台
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : yanyun

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2018-12-23 22:08:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for menulist
-- ----------------------------
DROP TABLE IF EXISTS `menulist`;
CREATE TABLE `menulist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL COMMENT '菜单标题',
  `imageUrl` varchar(100) NOT NULL COMMENT '上传图片地址',
  `descs` text COMMENT '产品描述',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menulist
-- ----------------------------
INSERT INTO `menulist` VALUES ('1', '牛奶一', '/files/1545568433190-5082.jpg', '牛奶一，这是牛奶一的介绍', '2018-12-23 20:34:21', '0000-00-00 00:00:00');
INSERT INTO `menulist` VALUES ('2', '牛奶二', '/files/1545569660729-3089.jpg', '牛奶二', '2018-12-23 20:54:22', '0000-00-00 00:00:00');
INSERT INTO `menulist` VALUES ('3', '牛奶三', '/files/1545569672918-3287.jpg', '牛奶三', '2018-12-23 20:54:33', '0000-00-00 00:00:00');
INSERT INTO `menulist` VALUES ('4', '牛奶四', '/files/1545569687124-4669.jpg', '牛奶四', '2018-12-23 20:54:48', '0000-00-00 00:00:00');
INSERT INTO `menulist` VALUES ('5', '牛奶五', '/files/1545569703445-5603.jpg', '牛奶五', '2018-12-23 20:55:04', '0000-00-00 00:00:00');
INSERT INTO `menulist` VALUES ('6', '牛奶六', '/files/1545569718761-7934.jpg', '牛奶六', '2018-12-23 20:55:20', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL COMMENT '购买产品名称',
  `mobile` varchar(100) NOT NULL COMMENT '购买人手机号',
  `address` text COMMENT '购买人地址',
  `num` int(11) NOT NULL DEFAULT '0' COMMENT '产品箱数',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id',
  `name` varchar(20) NOT NULL COMMENT '用户名',
  `pwd` text NOT NULL COMMENT '用户密码',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateTime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'branton', '123456', '2018-11-17 15:00:45', '2018-11-17 15:01:50');
