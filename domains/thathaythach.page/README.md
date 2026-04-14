# Domain config: thathaythach.page

This folder stores deployment files specific to the domain `thathaythach.page`.

## Files
- `nginx-primary.conf`: Serve this domain as the primary website.
- `nginx-redirect.conf`: Redirect this domain to another primary domain.
- `.htaccess-redirect`: Apache redirect sample.

## How to use
1. Choose one domain as primary.
2. For the primary domain, use `nginx-primary.conf`.
3. For secondary domains, use `nginx-redirect.conf` or `.htaccess-redirect`.
4. Update `<PRIMARY_DOMAIN>` placeholder before deploy.
