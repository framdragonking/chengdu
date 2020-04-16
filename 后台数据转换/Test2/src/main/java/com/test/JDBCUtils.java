package com.test;

import java.sql.*;

public class JDBCUtils {
    //数据库url、用户名和密码
    static final String DB_URL="jdbc:mysql://localhost:3306/test?&serverTimezone=GMT%2B8";
    static final String USER="root";
    static final String PASS="12345";
    public static void main(String[] args) {
        try {
            //1、注册JDBC驱动
            Class.forName("com.mysql.cj.jdbc.Driver");
            //2、获取数据库连接
            Connection connection = DriverManager.getConnection(DB_URL, USER, PASS);
            //3、操作数据库
            Statement statement = connection.createStatement();//获取操作数据库的对象
            String sql="select * from information";
            ResultSet resultSet = statement.executeQuery(sql);//执行sql，获取结果集

            while(resultSet.next()){ //遍历结果集，取出数据
                String tname = resultSet.getString("tname");
                String message = resultSet.getString("message");
                String telephone = resultSet.getString("telephone");
                String web = resultSet.getString("web");
                String site = resultSet.getString("site");
                String traffic = resultSet.getString("traffic");
                String price = resultSet.getString("price");
                //输出数据
                System.out.print("名称："+tname);
                System.out.print("简介："+message);
                System.out.print("联系电话"+telephone);
                System.out.print("网址"+web);
                System.out.print("编号"+site);
                System.out.print("路线"+traffic);
                System.out.print("门票价格"+price);
                System.out.println();
            }
            //4、关闭结果集、数据库操作对象、数据库连接
            resultSet.close();
            statement.close();
            connection.close();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch(SQLException e){
            e.printStackTrace();
        } catch(Exception e){
            e.printStackTrace();
        }
    }
}
