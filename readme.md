### Example of cross origin cookies

In `api-server/index.js`, update `origin` to a domain listed in your `/etc/hosts` file.

Start both servers, then navigate to `http://localhost:3000/setcookie`.  This will set a cookie on `localhost`.

Next, navigate to `http://<domain_listed_in_hosts>:3001` and open your console.  You will see a log of `{ hi: 'there' }`.  This indicates that we were able to make a cross domain request including cookies.  However, the info in that cookie is not accessible while at `http://<domain_listed_in_hosts>:3001`!  In addition, this only works if the 'origin' listed in `api-server/index.js` is explicitly set to `http://<domain_listed_in_hosts>:3001` (not likely in the real world).

To represent reality, change the `origin` property to any other value, then reload `http://<domain_listed_in_hosts>:3001`.  The request will now fail.
