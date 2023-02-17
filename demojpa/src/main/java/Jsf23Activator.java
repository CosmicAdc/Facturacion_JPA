
	import javax.enterprise.context.ApplicationScoped;
	import javax.faces.annotation.FacesConfig;
	import javax.ws.rs.ApplicationPath;
	import javax.ws.rs.core.Application;

/**This bean is required to activate JSF 2.3.
 * See https://github.com/eclipse-ee4j/mojarra/blob/2.3/README.md#user-content-activating-cdi-in-jakarta-faces-23
 * 
 * Remove this class if you don't need JSF.
 */
@ApplicationScoped
@FacesConfig(version = FacesConfig.Version.JSF_2_3)
@ApplicationPath("rs")
public class Jsf23Activator extends Application{
}