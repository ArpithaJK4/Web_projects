<%@page import="dto.Task"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Home</title>
<style type="text/css">
body {
	background-image:
		url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg");
	background-size: cover;
}
</style>
</head>
<body>
	<h1>Welcome to TODO Home</h1>
	<table border="1">
		<tr>
			<th>ID</th>
			<th>Task Name</th>
			<th>Description</th>
			<th>Task Date</th>
			<th>Task Completion Date</th>
			<th>Status</th>
			<th>Change Status</th>
			<th>Delete</th>
			<th>Update</th>
		</tr>
		<%
		List<Task> list = (List<Task>) request.getAttribute("list");

		for (Task task : list) {
		%>
		<tr>
			<td><%=task.getId()%></td>
			<td><%=task.getName()%></td>
			<td><%=task.getDescription()%></td>
			<td><%=task.getTaskDate()%></td>
			<td><%=task.getCompletetionDate()%></td>
			<td>
				<%
				if (task.isStatus())
				%>Completed<%else%>Not Completed
			</td>
			<td><a href="changestatus?id=<%=task.getId()%>"><button>Change</button></a></td>
			<td><a href="deletetask?id=<%=task.getId()%>"><button>Delete</button></a></td>
			<td><a href="edittask?id=<%=task.getId()%>"><button>Update</button></a></td>
		</tr>
		<%
		}
		%>
	</table>
	<br>
	<br>
	<a href="tasksession"><button style="margin-left: 20px">Add
			Task</button></a>
	<a href="logout"><button style="margin-left: 500px">Logout</button></a>
</body>
</html>