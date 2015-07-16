package mdl.rest;
import java.io.Serializable;
import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/people")
public class PeopleRest implements Serializable {

	private static final long serialVersionUID = 1L;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response get() throws Exception {

		ArrayList<String> a = new ArrayList<String>();
		a.add("1");
		a.add("2");
		a.add("3");
		a.add("4");
		a.add("5");
		return Response.ok(a).build();
	}
}