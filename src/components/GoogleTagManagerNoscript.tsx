export default function GoogleTagManagerNoscript() {
  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-MMDT32CH"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}
