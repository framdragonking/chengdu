package com.test;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.sql.*;

public class Test {

    public static void main(String[] args) {
        String driver = "com.mysql.cj.jdbc.Driver";
        String url = "jdbc:mysql://localhost:3306/test?&serverTimezone=GMT%2B8";
        String user = "root";
        String passwd = "12345";
        String sql = "select * from information";

        try {
            Class.forName(driver);
            Connection con = DriverManager.getConnection(url, user, passwd);
            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery(sql);
            ResultSetMetaData rsmd = rs.getMetaData();
            int colnum = rsmd.getColumnCount();
            String val = "";
            String colName = "";

            JSONArray jArr = new JSONArray();

            while (rs.next()) {
                for (int i = 1; i <= colnum; i++) {
                    JSONObject jobj = new JSONObject();
                    colName = rsmd.getColumnLabel(i);
                    if (1 == i) {
                        val = new Integer(rs.getInt(colName)).toString();
                    } else {
                        val = rs.getString(colName);
                    }

                    try {
                        jobj.put(colName, val);

                    } catch (JSONException e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    }
                    jArr.put(jobj);
                }

            }
            System.out.println("转换后的数组:");
            System.out.println(jArr.toString());

        } catch (ClassNotFoundException e) {
            System.out.println("未找到");
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}