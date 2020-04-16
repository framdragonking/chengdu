package com.test;

import java.sql.*;
import java.util.HashMap;
import java.util.Map;

/**
 * @version: java version 1.7+
 * @Author : simon
 * @Explain :
 * @contact:
 * @Time : 2018/8/15 14:44
 * @File : DBUtilForCarLoan
 * @Software: IntelliJ IDEA 2017.3.2
 */
public class DBUtilForCarLoan {

    /**
     * 访问数据库筛选数据并以json格式返回
     *
     */

    public static final String DB_URL="jdbc:mysql://localhost:3306/test?"; // DB URL
    public static final String DB_DRIVER="com.mysql.cj.jdbc.Driver";// DB driver
    public static final String USER_NAME="root"; // DB user name
    public static final String USER_PASSWORD="12345"; // DB user password
    public static final String EXECUTE_SQL="select * from information"; //DB execute sql

    /**
     * add by simon
     *
     * 功能：发送数据库连接请求
     *
     * @param url 数据库地址
     * @param driver 数据库驱动
     * @param name  数据库名称
     * @param password  数据库密码
     * @return
     */
    public static Connection sendDBconnection( String url,String driver,String name,String password){

        Connection connection=null;
        try {
            Class.forName(driver);
            connection = DriverManager.getConnection(url,name,password);

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }catch (SQLException e) {

            System.out.println("数据库登录失败，数据库为：" + DB_URL + "，用户名为：" + USER_NAME + "，密码为：" + USER_PASSWORD);
            e.printStackTrace();
        }
        return connection;
    }

    /**
     * add simon
     *
     * 功能：连接数据库并执行SQL语句并返回执行结果
     *
     * @param sql
     * @return
     */
    public static ResultSet getSqlResult( String sql ){

        Connection con = sendDBconnection(DB_URL,DB_DRIVER,USER_NAME,USER_PASSWORD);
        Statement statement = null;
        try {
            statement = con.createStatement();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        ResultSet sqlresult=null;

        try {

            //Statement对象执行数据库操作语句
            statement = con.createStatement();
            //执行sql语句并将结果保存在sqlresult
            sqlresult = statement.executeQuery(sql);

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return sqlresult;
    }

    /**
     * add by simon
     *
     * 功能：将ResultSet转换为 Map<String,String>
     * @param rs
     * @return Map<String,String>
     * @throws SQLException
     */
    public static Map<String,String> getResultMap (ResultSet rs) throws SQLException {

        Map<String, String> map = new HashMap<String, String>();
        ResultSetMetaData rsmd = rs.getMetaData();
        int count = rsmd.getColumnCount();

        for (int i = 1; i <= count; i++) {
            String key = rsmd.getColumnLabel(i);
            String value = rs.getString(i);
            map.put(key, value);
        }
        return map;
    }
}